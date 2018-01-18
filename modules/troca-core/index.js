//Import other modules here

//import normalize from 'normalizecss';
//import $ from 'jquery';
import 'select2';
import 'select2/select2.css';

import '../troca-reset';
import '../troca-variables';
import '../troca-mixins';
import '../troca-helpers';
import '../troca-type';
import '../troca-buttons';
import '../troca-stripped';
import '../troca-row-revert';
import '../troca-forms';
import '../troca-message';
import '../troca-icons';

$(document).ready(function() {
    $('.js-example-basic-single').select2();
});

//import '../troca-docs';