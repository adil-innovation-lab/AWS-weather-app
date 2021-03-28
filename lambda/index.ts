import getCurrent from './getCurrent';
import getAll from './getAll';

type appsyncevent = {
    info: {fieldName: String}
    arguments: {zipcode: String}
}

exports.handler = async (event: appsyncevent) => {
    switch(event.info.fieldName) {
        case 'getCurrent':
            return await getCurrent(event.arguments.zipcode)
        case 'getAll':
            return await getAll(event.arguments.zipcode)
        default: 
            return null
    }
}
