(function(root) {
    'use strict';


    // a basic try, catch, finally
    try {
        console.log('all is good');
        iDoNotExist();
        console.log('oh no!');

    } catch (e) {
        console.error(e);
    } finally {
        console.log('this gets executed for sure');
    }


    // manually trowing exceptions
    try {
        // the base Exception in JavaScript is Error,
        // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
        // for avaliable subytpes
        throw new Error('the error message');
        console.log('after the error');
    } catch (e) {
        console.error(e);
    }


    // catching custom error types
    try {
        throw new RangeError('value is out of range');
    } catch (e) {
        switch (e.name) {
            case 'TypeError':
                console.error('Wrong type!');
                break;
            case 'RangeError':
                console.error('Value out of range!');
                break;
            default:
                console.error('another error type');
                break;
        }
    }


    // creating own Error subtypes by inheriting Error, as learned before
    function AllIsLostError(message) {
        this.name = 'AllIsLostError';
        this.message = (message || '');
    }
    AllIsLostError.prototype = Object.create(Error.prototype);
    AllIsLostError.prototype.constructor = AllIsLostError;

    try {
        throw new AllIsLostError();
    } catch (e) {
        switch (e.name) {
            case 'TypeError':
                console.error('Wrong type!');
                break;
            case 'RangeError':
                console.error('Value out of range!');
                break;
            case 'AllIsLostError':
                console.error('all is lost anyway');
                // rethrow
                throw e;
            default:
                console.error('another error type');
                break;
        }
    }


})(this);
