export class MainPage {
    static getAngular() {
        return cy.get('[data-cy="angular-logo"]')
    }
}
export class Pills {
    static getPills(index: number) {
      return cy.get('[data-cy="pills"]').eq(index);
    }
  }