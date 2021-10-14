<?php get_header(); ?>

<section class="main">
	<div class="container-fluid grid nopadding">
		<div class="row display-block">
			<div class="col col-xs-12 screen">
				<div class="logo-wrapper">
					<h1 class="logo">
						<span>.travisPurcell<br class="visible-xs"> { Developer } </span>
						<p class="logo__subtitle">A Portfolio Site</p>
					</h1>
					<div class="hero-modal">
						<?php include get_template_directory() . "/template-parts/partials/ptl-demo-modal.php"?>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<?php get_footer(); ?>