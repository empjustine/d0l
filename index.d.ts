declare type D0LSymbol = string;
declare type D0L = DeterministicContextFreeStringRewritingSystem;
/**
 * D0L System / Deterministic context-free L-system
 *
 * Rules for L-systems:
 *   - V, "alphabet";
 *     - Set<Symbol>;
 *     - the set Alphabet MUST be composed of Symbols;
 *   - ω ∈ V⁺, "axiom";
 *     - Array<Symbol>;
 *     - axiom MUST be composed of a non-empty sequence of Symbols;
 *   - P ⊂ V* × V*, "productions";
 *     - Set<Array<Symbol>,Set<Array<Symbol>>>;
 *     - a finite Set Production MUST is a set of rules, from sequences of
 *       Symbols to a Set of distinct sequences of Symbols.
 *   - When computing the result of a iteration, all productions are
 *     applied simultaneously.
 *
 * Rule for Deterministic context-free L-systems:
 *   - P ⊂ V × V*
 *     - Map<Symbol,Array<Symbol>>;
 *     - productions must be a function;
 *     - The domain of productions MUST be a Set composed of individual
 *       Symbols;
 *     - The codomain of productions MUST be a sequence of Symbols.
 *
 */
declare class DeterministicContextFreeStringRewritingSystem {
    /**
     * P ⊂ V × V*
     *
     * A finite set of productions, a `Symbol` rewritting
     * function.
     */
    private productions;
    /**
     *
     * Setup to enable iterative computation of the L-system
     * grammar.
     * @param productions Symbol rewritting function used by
     * this system
     */
    constructor(productions: Map<D0LSymbol, Array<D0LSymbol>>);
    /**
     *
     * Given a `previousGeneration``, compute the next iteration of a
     * sequence of Symbols synchronously.
     * @param {Array<D0LSymbol>} previousGeneration sequence of Symbols, where all
     * productions will be applied.
     * @returns {Array<D0LSymbol>} a derived sequence of Symbols, representing the current
     * generation.
     */
    derive(previousGeneration: string): string;
}
