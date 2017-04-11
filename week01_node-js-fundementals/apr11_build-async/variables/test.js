const assert = require('assert');

describe('variables', () => {

    describe('numbers', () => {
        it('copies to new variables', () => {
            var a = 3;
            var b = a;
            a = 4;
            assert.equal(a, 4);
            assert.equal(b, 3);
        });

        it('copied to arguments', () => {
            var a = 3;
            
            function double(x) {
                x = 4;
            }

            double(a);
            assert.equal(a, 3);
        });
    })

    describe('objects', () => {
        it('reference copied to new variables', () => {
            var obj = { name: 'Foo' };
            assert.equal(obj.name, 'Foo');

            var obj2 = obj;
            obj2.name = 'Bar';

            assert.equal(obj.name, 'Bar');
        });

        it('numbers are copied to arguments', () => {
            var obj = { myProperty: 'Foo' };
            
            function changeName(thingToChange) {
                thingToChange.myProperty = 'Bar';
            }

            changeName(obj);

            assert.equal(obj.myProperty, 'Bar');

            const c = obj;
            const duck = obj;
            let variableThatILike = obj;

            duck.myProperty = 'Quack';
            
            assert.equal(obj.myProperty, 'Quack');


        });
    })
})