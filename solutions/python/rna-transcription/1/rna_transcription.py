def to_rna(dna_strand):
    complement = {
        "G" : "C",
        "C" : "G",
        "T" : "A",
        "A" : "U"
    }

    rna = ""
    for nucleotides in dna_strand:
        rna += complement[nucleotides]

    return rna
    
    