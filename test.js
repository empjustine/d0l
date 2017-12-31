const D0L  = require('./index');
const test = require('tape');


test("Lindenmayer\'s original L-system for modelling the growth of algae.", (test) => {
    const d0l = new D0L(
        new Map()
            .set('A', 'AB')
            .set('B', 'A')
    );

    const axiom = 'A';
    const generations = [ axiom ];
    while (generations.length < 10) {
        generations.push(
            d0l.derive(generations[generations.length - 1])
        );
    }

    test.equal(generations[0], axiom);
    test.equal(generations[1], 'AB');
    test.equal(generations[2], 'ABA');
    test.equal(generations[3], 'ABAAB');
    test.equal(generations[4], 'ABAABABA');
    test.equal(generations[5], 'ABAABABAABAAB');
    test.equal(generations[6], 'ABAABABAABAABABAABABA');
    test.equal(generations[7], 'ABAABABAABAABABAABABAABAABABAABAAB');
    test.end();
});


test("Moore Curve", (test) => {
    const d0l = new D0L(
        new Map()
            .set('-', '-') 
            .set('+', '+')
            .set('F', 'F')
            .set('A', '-BF+AFA+FB-')
            .set('B', '+AF-BFB-FA+')
    );

    const axiom = '+AFA+F+AFA-';
    const generations = [ axiom ];
    while (generations.length < 10) {
        generations.push(
            d0l.derive(generations[generations.length - 1])
        );
    }
    
    test.equal(generations[0], axiom);
    test.equal(generations[1], '+-BF+AFA+FB-F-BF+AFA+FB-+F+-BF+AFA+FB-F-BF+AFA+FB--');
    test.equal(generations[2], '+-+AF-BFB-FA+F+-BF+AFA+FB-F-BF+AFA+FB-+F+AF-BFB-FA+-F-+AF-BFB-FA+F+-BF+AFA+FB-F-BF+AFA+FB-+F+AF-BFB-FA+-+F+-+AF-BFB-FA+F+-BF+AFA+FB-F-BF+AFA+FB-+F+AF-BFB-FA+-F-+AF-BFB-FA+F+-BF+AFA+FB-F-BF+AFA+FB-+F+AF-BFB-FA+--');
    test.end();
});