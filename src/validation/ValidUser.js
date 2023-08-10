import emailvalidator from 'deep-email-validator'
export { ValidUser }


function ValidUser (body){

    const errors = {};

    ValidName(body, errors);
    ValidEmail(body, errors);
    ValidNickname(body, errors);
    ValidPassword(body, errors);
    ValidDate(body, errors);

    return errors;

}

function ValidName(body, errors) {

    if (!body.name) {
        errors.name = 'Name required';
    } else {
        if (body.name.length < 5) {
            errors.name = 'Name must be at least 5 characters long';
        }
        if (body.name.length > 50) {
            errors.name = 'Name must be less than 50 characters long';
        }
    }
}

async function ValidEmail(body, errors) {
    
        if (!body.email) {
            errors.email = 'Email required';
        } else {
            let email = await emailvalidator(email);
            if (!email) {
                errors.email = 'Email is not valid';
            }
        }
}

function ValidNickname(body, errors) {

    if (!body.nickname) {
        errors.nickname = 'Nickname required';
    } else {
        if (body.nickname.length < 5) {
            errors.nickname = 'Nickname must be at least 5 characters long';
        }
        if (body.nickname.length > 50) {
            errors.nickname = 'Nickname must be less than 50 characters long';
        }
    }
}

function ValidPassword(body, errors) {

    if (!body.password) {
        errors.password = 'Password required';
    } else {
        if (body.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        }
        if (body.password.length > 50) {
            errors.password = 'Password must be less than 50 characters long';
        }
    }
}

function ValidDate(body, errors) {

    if (!body.date) {
        errors.date = 'Date required';
    }
}