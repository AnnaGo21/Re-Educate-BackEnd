/**
 * 4)გამოიყენე for ლუპი 1-დან 100-მდე რიცხვებზე.
    თუ რიცხვი იყოფა 3-ზე დააბრუნე - "Foo"
    თუ იყოფა 5-ზე დააბრუნე - "Bar"
    თუ იყოფა ორივეზე დააბრუნე - "FooBar"
    თუ არა დააბრუნე - უბრალოდ რიცხვი
 */
const FOO = 'Foo'
const BAR = 'Bar'
const FOOBAR = 'FooBar'

function fooBar() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log(FOOBAR);
        } else if (i % 3 === 0) {
            console.log(FOO);
        } else if (i % 5 === 0) {
            console.log(BAR);
        } else {
            console.log(i);
        }
    }
}

fooBar();