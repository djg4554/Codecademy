// Returns a random DNA base
var dnaBases = ['A', 'T', 'C', 'G'];
const returnRandBase = () => {
    return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
};


function pAequorFactory(specimenNum,dna) {
    return {
        _specimenNum: specimenNum,
        _dna: dna,
        mutate() {
            let currentIndex =Math.floor(Math.random() * 4)
            this._dna[currentIndex] = dnaBases.filter(e=> {
                return this._dna[currentIndex] !== e;
            })[Math.floor(Math.random() * 3)];
        },
         compareDNA(pAequor) {
            let perc = this._dna.reduce((acc, curr, index) => (curr === pAequor._dna[index] ? acc+1 : acc), 0);
            perc = Math.floor(perc / 15.0 * 100) ;
            console.log(`Specimen #${this._specimenNum}  and specimen #${pAequor._specimenNum} have a ${perc}% DNA in common`);
         },
        willLikelySurvive() {
            return this._dna.reduce((acc, curr) => (acc==='C' || acc === 'G') ? acc+1 : acc , 0) > 9;
        }
    }
}

function simulate() {
    let arr = []
    for (let i = 0; i < 30; i++) {
        arr.push(pAequorFactory(i, mockUpStrand()));
    }
    return arr;
}


console.log(simulate())