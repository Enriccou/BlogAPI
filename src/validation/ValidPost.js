function PostValidation (data){
    const errors = {};

    ValidTitle(data, errors);
    ValidContent(data, errors);
    ValidAuthor(data, errors);
    ValidReferences(data, errors);
    ValidTag(data, errors);
    ValidDate(data, errors);
    ValidHour(data, errors);

    return errors;

}

function ValidTitle (data, errors){

    if(!data.title){
        errors.title = 'Title is required';
    } else {
        if(data.title.length < 5){
            errors.title = 'Title must be at least 5 characters long';
        }
        if (data.title.length > 50){
            errors.title = 'Title must be less than 50 characters long';
        }
    }
}

function ValidContent (data, errors){

    if (!data.content){
        errors.content = 'Content is required';
    } else {
        if (data.content.length < 10){
            errors.content = 'Content must be at least 10 characters long';
        }
        if (data.content.length > 5000){
            errors.content = 'Content must be less than 5000 characters long';
        }
    }
}

function ValidAuthor (data, errors){

    if (!data.author){
        errors.author = 'Author is required';
    } else {
        if(data.authot.length < 20){
            errors.author = 'Author must be at least 20 characters long';
        }
        if (data.author.length > 50){
            errors.author = 'Author must be less than 50 characters long';
        }
    }
}

function ValidReferences (data, errors){

    if (data.references){
        errors.references = 'References is required';
    } else {

        if (data.references.length < 1){
            errors.references = 'References must be less than 5 itens long';
        }
        if (data.references.length > 20){
            errors.references = 'References must be less than 50 itens long';
        }
    }
}

function ValidTag (data, errors){

    if (data.tag){
        errors.tag = 'Tag is required';
    } else {

        if (data.tag.length < 1){
            errors.tag = 'Tag must be less than 5 itens long';
        }
        if (data.tag.length > 20){
            errors.tag = 'Tag must be less than 50 itens long';
        }
    }
}

function ValidDate (data, errors){

    if (data.date){
        errors.date = 'Date is required';
    }
}

function ValidHour (data, errors){

    if (data.hour){
        errors.hour = 'Hour is required';
    }
}