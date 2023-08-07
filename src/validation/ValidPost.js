export { PostValidation }

function PostValidation(body) {
    const errors = {};

    ValidTitle(body, errors);
    ValidContent(body, errors);
    ValidAuthor(body, errors);
    //ValidReferences(body, errors);
    //ValidTag(body, errors);
    ValidDate(body, errors);
    ValidHour(body, errors);

    return errors;

}

function ValidTitle(body, errors) {

    if (!body.title) {
        errors.title = 'Title is required because it is the title of the post';
    } else {
        if (body.title.length < 5) {
            errors.title = 'Title must be at least 5 characters long';
        }
        if (body.title.length > 50) {
            errors.title = 'Title must be less than 50 characters long';
        }
    }
}

function ValidContent(body, errors) {

    if (!body.content) {
        errors.content = 'Content is required';
    } else {
        if (body.content.length < 10) {
            errors.content = 'Content must be at least 10 characters long';
        }
        if (body.content.length > 5000) {
            errors.content = 'Content must be less than 5000 characters long';
        }
    }
}

function ValidAuthor(body, errors) {

    if (!body.author) {
        errors.author = 'Author is required';
    } else {
        if (body.author.length < 5) {
            errors.author = 'Author must be at least 20 characters long';
        }
        if (body.author.length > 50) {
            errors.author = 'Author must be less than 50 characters long';
        }
    }
}

function ValidReferences(body, errors) {

    if (body.references) {
        errors.references = 'References is required';
    } else {

        if (body.references.length < 1) {
            errors.references = 'References must be less than 1 itens long';
        }
        if (body.references.length > 20) {
            errors.references = 'References must be less than 50 itens long';
        }
    }
}

function ValidTag(body, errors) {

    if (body.tag) {
        errors.tag = 'Tag is required';
    } else {

        if (body.tag.length <= 1) {
            errors.tag = 'Tag must be less than 1 itens long';
        }
        if (body.tag.length > 20) {
            errors.tag = 'Tag must be less than 50 itens long';
        }
    }
}

function ValidDate(body, errors) {

    if (body.date) {
        errors.date = 'Date is required';
    }
}

function ValidHour(body, errors) {

    if (body.hour) {
        errors.hour = 'Hour is required';
    }
}