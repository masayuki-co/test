<?php get_header(); ?>

<div class="container">

	<div class="main-area">
		<?php if ( have_posts() ) : ?>
			<?php while ( have_posts() ) : the_post(); ?>
				<section>
					<div class="post-container">
						<div class="post-title">
							<h2>
								<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
							</h2>
						</div>
						<div class="post-content">
							<?php the_content(); ?>
						</div>
					</div>
				</section>
			<?php endwhile; ?>
		<?php else : ?>
			<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
		<?php endif; ?>
	</div>

	<?php get_sidebar(); ?>

</div>

<?php get_footer(); ?>