<!-- Front Modal -->
<div class="modal fade" id="frontModal" tabindex="-1" role="dialog" aria-labelledby="frontModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="container-fluid grid">
        <div class="row">
          <div class="col-xs-12 col-sm-2 sidebar_wrapper">
              <?php include get_template_directory() . "/template-parts/partials/ptl-dashboard-sidebar.php"?>
          </div>
          <div class="col-xs-12 col-sm-10">

            <!--Intro Content-->
            <div class="modalChoiceIntro modalChoice active">
              <div class="modal-header">
                <h2 class="modal-title" id="introModalLabel">Intro</h2>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                  <?php include get_template_directory() . "/template-parts/demo.php"?>
              </div>
              <div class="modal-footer">
              <div class="contactInfo flex">
                  <p><a href="https://github.com/TravisPurcell/Portfolio/tree/main/themes/portfolio" target="_blank"><img class="github" src="<?php echo get_template_directory_uri(); ?>/dist/images/github.png" alt="Go to Github profile"/></a></p>
                  <p class="email"><a href="mailto:travis.n.purcell@gmail.com">travis.n.purcell@gmail.com</a></p>
              </div>
              </div>
            </div>
            <!---->

            <!--Demo Content-->
            <div class="modalChoiceDemo modalChoice">
              <div class="modal-header">
                <h2 class="modal-title" id="frontModalLabel">Demo</h2>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                  <?php include get_template_directory() . "/template-parts/demo.php"?>
              </div>
              <div class="modal-footer">
                <div>
                  <p class="description">
                    This demo exemplifies PHP form handling, as well as storing, accessing &amp; displaying data via JSON and PHP.<br>
                    1. Select your profession, state and years of experience.<br>
                    2. Your inputs query the JSON PHP data structure to determine your suggested salary.<br>
                    3. Once the page reloads, your results will be displayed
                  </p>
                </div>
                <div class="demo-github flex">
                  <p><a href="https://github.com/TravisPurcell/Portfolio/tree/main/themes/portfolio" target="_blank"><img class="github" src="<?php echo get_template_directory_uri(); ?>/dist/images/github.png" alt="Go to Github profile"/></a></p>
                  <p class="description"><a class="description" href="https://github.com/TravisPurcell/portfolio-wp/tree/main/themes/portfolio/template-parts/partials" target="_blank">See the Code.</a></p>
              </div>
              </div>
            </div>
            <!---->

            <!--Clients Content-->
            <div class="modalChoiceClients modalChoice">
              <div class="modal-header">
                <h2 class="modal-title" id="clientsModalLabel">Clients</h2>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                  <?php include get_template_directory() . "/template-parts/demo.php"?>
              </div>
              <div class="modal-footer">
                <p class="description">
                  Click on the logo to view the website. 
                </p>
              </div>
            </div>
            <!---->
          </div>
        </div>
      </div>
    </div>
  </div>
</div>