<?php
/**
* Template Name: AngularJS
*
* @package Portfolio

*/
get_header();
?>

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>

<html>
    <body>
        <section class="angular">
            <div class="container-fluid grid nopadding">
                <div class="row display-block">
                    <div class="col col-xs-12 screen">
                        <div ng-app="" ng-init="name='.travisPurcell'; title='{Developer}';" class="logo-wrapper">
                            <h1 class="logo">
                                <span>{{name}}<br class="visible-xs"> {{title}} </span>
                                <p class="logo__subtitle">A {{type}} Site</p>
                            </h1>
                            <div class="hero-modal">
                                <?php include get_template_directory() . "/template-parts/partials/ptl-demo-modal.php"?>
                            </div>
                        </div>
                        <div class="form">
                            <label class="sr-only">Type:</label>
                            <input type="text" ng-model="type" placeholder="Choose a site name">
                            <p class="hint">Hint. The answer is "Portfolio".</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </body>
</html>

<?php 
get_footer();
