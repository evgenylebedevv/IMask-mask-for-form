IMask(document.getElementById('phone'), {
    mask: '+{7}(000)000-00-00'
})

IMask(document.getElementById('date'), {
    mask: Date,
    pattern: 'Y-`m-`d',
    blocks: {
        d: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 31,
            maxLength: 2,
        },
        m: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12,
            maxLength: 2,
        },
        Y: {
            mask: IMask.MaskedRange,
            from: 1900,
            to: 9999,
        }
    },

    // define date -> str convertion
    format: function (date) {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        if (day < 10) day = "0" + day;
        if (month < 10) month = "0" + month;

        return [year, month, day].join('-');
    },
    // define str -> date convertion
    parse: function (str) {
        var yearMonthDay = str.split('-');
        return new Date(yearMonthDay[0], yearMonthDay[1] - 1, yearMonthDay[2]);
    },

    // optional interval options
    min: new Date(2000, 0, 1),  // defaults to `1900-01-01`
    max: new Date(2020, 0, 1),  // defaults to `9999-01-01`

    autofix: true,  // defaults to `false`, see details

    // also Pattern options can be set
    lazy: false,

    // and other common options
    overwrite: true  // defaults to `false`
})