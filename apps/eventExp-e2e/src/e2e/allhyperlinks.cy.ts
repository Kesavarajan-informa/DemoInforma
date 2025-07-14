describe ('CPHI  Home Page print all hyperlinks', ()=>{

    it ('print the all hypelinks', ()=> {
        
        cy.visit("https://www.cphi-online.com/live/service/subscribe46_step2.jsp");
    

        cy.get('a').each(($el, index) => 
            {
            const linkText = $el.text();
            const herf = $el.attr('herf');
            const message = `Link ${index +1}: ${linkText} -> ${herf}`;
            //console.log(`Link ${index +1}: ${linkText} -> ${herf}`);
            cy.task('logToTerminal', message);

            // cy.get('a').then(($links) => {
            //     const count = $links.length;
            //     cy.task('logToTerminal', `Total number of links: ${count}`);
            })

        });
   // })
})