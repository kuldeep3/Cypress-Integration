describe('Blog', () => {
	it('shows all posts', () => {
		cy.create('App\\Post', {
			title: 'My First Post'
		});

		cy.visit('/blog').contains('My First Post');
	});
	it('creates a post', () => {

	});
});