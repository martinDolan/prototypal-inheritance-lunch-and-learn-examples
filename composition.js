const canSting = {
    sting() {
        console.log('STING LIKE A BEE!!!');
    }
};

const cannotSting = {
    sting() {
        console.log('Float like a butterfly!!');
    }
}

const comeFromCocoon = {
    metamorphosis() {
        console.log('I metamorphosize!');
    }
};

function createInsect(stingBehavior) {
    return {
        ...stingBehavior
    };
}   

// merge properties of objects returned by createInsect
function createBee() {
    return {
        ...createInsect(canSting),
    };
}

// merge properties of objects returned by createInsect and comeFromCocoon
function createButterfly() {
    return {
        ...createInsect(cannotSting),
        ...comeFromCocoon
    };
}

const butterfly = createButterfly();
const bee = createBee();

butterfly.sting();
bee.sting();