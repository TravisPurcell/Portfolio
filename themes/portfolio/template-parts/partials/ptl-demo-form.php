<?php if (!is_page_template('angularjs.php')) : ?>

<section class="dashboard">
    <p class="description">Please fill in entries to determine your suggested salary based upon your experience, profession &amp; state.</p>
    <div class="calculator">
        <form method="get">
            <fieldset>
                <label for="profession">Profession</label>
                <select name="profession" id="profession">
                    <option value="Developer">Developer</option>
                    <option value="Lawyer">Lawyer</option>
                    <option value="Doctor">Doctor</option>
                </select>
            </fieldset>
            <fieldset>
                <label for="state">State</label>
                <select name="state" id="state">
                    <option value="New Jersey">New Jersey</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Colorado">Colorado</option>
                </select>
            </fieldset>
            <fieldset>
                <label for="experience">Years of Experience</label>
                <select name="experience" id="experience">
                    <option value="1">1</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                </select>
            </fieldset>
            <input type="submit" value="Submit">
        </form> 
    </div>
    <?php include get_template_directory() . "/template-parts/partials/ptl-demo.php"?>
</section>

<?php else : ?>

<section class="dashboard">
  <p class="description">Please fill in entries to determine your suggested salary based upon your experience, profession &amp; state.</p>
  <div class="calculator">
        <form method="get">
            <fieldset>
                <label for="profession">Profession</label>
                <select ng-model="profession" ng-init="Developer" id="profession">
                    <option value="Developer">Developer</option>
                    <option value="Lawyer">Lawyer</option>
                    <option value="Doctor">Doctor</option>
                </select>
            </fieldset>
            <fieldset>
                <label for="state">State</label>
                <select ng-model="state" ng-init="New Jersey" id="state">
                    <option value="New Jersey">New Jersey</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Colorado">Colorado</option>
                </select>
            </fieldset>
            <fieldset>
                <label for="experience">Years of Experience</label>
                <select ng-model="experience" ng-init="1" id="experience">
                    <option value="1">1</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                </select>
            </fieldset>
            <input type="submit" value="Submit">
        </form> 
    </div>
    <?php include get_template_directory() . "/template-parts/partials/ptl-demo.php"?>
</section>  

<?php endif; ?>