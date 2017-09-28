/*global window*/
'use strict';

function isObject(obj) {
    return (typeof obj === 'object' && obj !== null) ? true : false;
}

/**
 * Creates query params for a graphql query
 * @param {array} params
 * @return {string} value - string of name value pairs
 */
function createQueryParams(params) {
    if (!Array.isArray(params)) {
        return params;
    }
    var param,
        strArray = [],
        value = '',
        i = 0;

    for (; i < params.length; i++) {
        param = params[i];
        strArray[i] = `${param.name} :"${param.value}"`;
    }
    value = strArray.join();

    return value;
}

/**
 * Creates query params for a graphql query
 * @param {array} fields
 * @return {string} value - string of name values
 */
function createQueryFields(fields) {
    if (!Array.isArray(fields)) {
        return fields;
    }
    var field,
        strArray = [],
        value = '',
        i = 0,
        fragment = '';

    for (; i < fields.length; i++) {
        field = fields[i];
        strArray[i] = field.name;
        fragment = field.fragment;

        if (fragment) {
            strArray[i] = `${field.name} { ...${fragment} }`;
        } else if (isObject(field.values)) {
            strArray[i] = `${field.name} { ${createQueryFields(field.values)} }`;
        }
    }
    value = strArray.join();

    return value;
}

function createFragments(fragments) {
    if (!Array.isArray(fragments)) {
        return fragments;
    }

    var fragment,
        on = '',
        i = 0,
        name = '',
        strArray = [],
        value ='';

    for (; i < fragments.length; i++) {
        fragment = fragments[i];
        name = fragment.name;
        on = fragment.on;

        strArray[i] = ` fragment ${name} on ${on} { ${createQueryFields(fragment.values)} } `;
    }

    value = strArray.join();

    return value;
}

window.Cipher = window.Cipher || {
    createGraphQLQuery: function (options) {
        options = options || {};

        var query = [],
            name = options.name,
            params = createQueryParams(options.params) || '',
            fields = createQueryFields(options.fields) || '',
            fragments = createFragments(options.fragments) || '',
            value;

        query[0] = `${name}(${params})`;
        query[1] = `{${fields}}`;
        query[2] = `${fragments}`;
        value = query.join('');

        return value;
    }
};
