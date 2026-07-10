// @ts-check

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
  if(humidityPercentage >= 70){
    throw new Error('Throws an error');
  }
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
  if (temperature === null) {
        // Sensor is broken, throw ArgumentError
        throw new ArgumentError();
    } else if (temperature > 500) {
        // Temperature exceeds threshold, throw OverheatingError with temperature
        throw new OverheatingError(temperature);
    }
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
    try {
        // Call the check function to get the machine's status
        actions.check();
    } catch (error) {
        // Handle different types of errors based on the error instance
        if (error instanceof ArgumentError) {
            // Sensor is broken, alert technician
            actions.alertDeadSensor();
        } else if (error instanceof OverheatingError) {
            // Temperature error, check the specific temperature
            if (error.temperature >= 600) {
                // Critical temperature, shut down the machine
                actions.shutdown();
            } else {
                // Temperature warning, turn on warning light
                actions.alertOverheating();
            }
        } else {
            // Rethrow any other types of errors
            throw error;
        }
    }
  
}
