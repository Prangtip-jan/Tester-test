describe('Automated Testing Script with Actions', () => {
  beforeEach(() => {
      cy.visit('https://codenboxautomationlab.com/practice/')
  })

  it('Select Radio Button Example', () => {
      cy.get('input[value="radio2"]').click()
      cy.screenshot('RadioButtonSelected')
      cy.log('Radio button 2 selected')
  })

  it('Autocomplete Dynamic Dropdown', () => {
      cy.get('#autocomplete').type('Thai')
      cy.wait(1000)
      cy.screenshot('AutocompleteTyped')
      cy.get('.ui-menu-item').contains('Thailand').click()
      cy.screenshot('AutocompleteSelected')
      cy.log('Thailand selected from dynamic dropdown')
  })

  it('Select API in Static Dropdown', () => {
      cy.get('#dropdown-class-example').select('API')
      cy.screenshot('DropdownSelectedAPI')
      cy.log('API selected from static dropdown')
  })

  it('Check Option1 and Option3', () => {
      cy.get('input[id="checkBoxOption1"]').check()
      cy.screenshot('CheckboxOption1Checked')
      cy.log('Option 1 checked')

      cy.get('input[id="checkBoxOption3"]').check()
      cy.screenshot('CheckboxOption3Checked')
      cy.log('Option 3 checked')
  })

  it('Mouse Hover Example', () => {
      cy.get('div.mouse-hover-content').invoke('show')
      cy.screenshot('MouseHoverShown')
      cy.log('Mouse hover content shown')
  })
})
