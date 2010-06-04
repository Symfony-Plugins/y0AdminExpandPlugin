<?php

// just add assets
sfContext::getInstance()->getResponse()->addStylesheet('/y0AdminExpandPlugin/css/expand.css', 'last');
sfContext::getInstance()->getResponse()->addJavascript('/y0AdminExpandPlugin/js/expand.js', 'last');

