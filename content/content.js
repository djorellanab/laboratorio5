const uuidv1 = require('uuid/v1');

let contents = [];

const create = (content) =>{
    content._id = uuidv1();
    contents.push(content);
    return content;
}

const read = (id, desde, limite) => {
    if(!id){
        return contents.slice(desde, desde + limite);
    }
    else{
        let content = contents.find(x => x._id === id);
        return (content !== undefined) ? content : null;
    }
}

const update = (content) =>{
    let index = contents.findIndex(x => x._id === content._id);
    if(index !== -1)
        contents[index] = content;
    return (index !== -1) ?  contents[index]  : null;
}

const _delete = (_id) =>{
    let content = contents.find(x => x._id === _id);
    if(content !== undefined)
    {
        contents = contents.filter(x => x._id !== _id);
    }
    return (content !== undefined) ? content : null;
}

module.exports = {create, read, update, _delete}