function throwIfMIssing () {
    throw new Error('Missing parameter')
}

function foo (mustBeProvided = throwIfMIssing()) {
    return mustBeProvided;
}

foo()