/// <reference path="./global.d.ts" />
// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.
import { NotAvailable, Untranslatable,ConnectionError } from './errors.js';
export class TranslationService {
  /**
   * Creates a new service
   * @param {ExternalApi} api the original api
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * Attempts to retrieve the translation for the given text.
   *
   * - Returns whichever translation can be retrieved, regardless the quality
   * - Forwards any error from the translation api
   *
   * @param {string} text
   * @returns {Promise<string>}
   */
  free(text) {
    return this.api.fetch(text)
        .then(response => response.translation)
        .catch(error => { throw error; })
  }

  /**
   * Batch translates the given texts using the free service.
   *
   * - Resolves all the translations (in the same order), if they all succeed
   * - Rejects with the first error that is encountered
   * - Rejects with a BatchIsEmpty error if no texts are given
   *
   * @param {string[]} texts
   * @returns {Promise<string[]>}
   */
  batch(texts) {
    if(texts.length === 0){
      return Promise.reject(new BatchIsEmpty());
    }
    const translationPromise = texts.map(text => this.free(text));
    return Promise.all(translationPromise)
  }

  /**
   * Requests the service for some text to be translated.
   *
   * Note: the request service is flaky, and it may take up to three times for
   *       it to accept the request.
   *
   * @param {string} text
   * @returns {Promise<void>}
   */
   request(text) {
    const attemptRequest = (remainingAttempts) => {
      return new Promise((resolve, reject) => {
        this.api.request(text, (error) => {
          if (error) {
            if (remainingAttempts > 1) {
              return attemptRequest(remainingAttempts - 1).then(resolve).catch(reject);
            }
            return reject(error);
          }
          resolve();
        });
      });
    };

    return attemptRequest(3); // Retry up to 3 times
  }

  /**
   * Retrieves the translation for the given text, ensuring it meets a certain quality threshold.
   *
   * If the translation is not available, requests the translation and retries.
   * Only resolves when the quality is above the given threshold.
   *
   * @param {string} text
   * @param {number} qualityThreshold
   * @returns {Promise<string>}
   */
   premium(text, qualityThreshold) {
    // Try to fetch the translation and check its quality
    return this.fetchAndCheckQuality(text, qualityThreshold)
      .then(
        // Success case: translation is fetched and quality is checked
        translation => translation,
        // Error handling: if fetch fails (NotAvailable or QualityThresholdNotMet), handle it
        error => {
          if (error instanceof NotAvailable) {
            // If the translation is not available, request it and retry fetching
            return this.request(text)
              .then(() => this.fetchAndCheckQuality(text, qualityThreshold)); // Retry after requesting
          }
          // Propagate other errors (e.g., quality not met)
          throw error;
        }
      );
  }

  // Helper method to fetch and check the quality of a translation
   fetchAndCheckQuality(text, qualityThreshold) {
    return this.api.fetch(text)
      .then(
        // Success case: check if the quality is sufficient
        response => {
          if (response.quality >= qualityThreshold) {
            return response.translation; // Return translation if quality meets the threshold
          } else {
            throw new QualityThresholdNotMet(text); // Reject if quality is insufficient
          }
        },
        // Error handling: propagate if fetch fails (NotAvailable error)
        error => {
          if (error instanceof NotAvailable) {
            throw error; // Propagate NotAvailable error
          } else {
            // If it's a connection-related error or other, throw a ConnectionError
            throw new Untranslatable(text)
          }
        }
      );
  }
}

/**
 * This error is used to indicate a translation was found, but its quality does
 * not meet a certain threshold. Do not change the name of this error.
 */
export class QualityThresholdNotMet extends Error {
  /**
   * @param {string} text
   */
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim(),
    );

    this.text = text;
  }
}

/**
 * This error is used to indicate the batch service was called without any
 * texts to translate (it was empty). Do not change the name of this error.
 */
export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim(),
    );
  }
}




