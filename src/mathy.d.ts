export module mathy {
    class Engine {
        public version: string;
        public getRules: () => rule[];
        constructor (...rules: rule[]);
        public add(...newRules: rule[]): void;
        public process(): {};
    }
    interface rule {
        name: string;
        derivation: string;
        result: Boolean;
    }
    class Calculation {
        public type: calculationType;
        public value: any;
        public children: Calculation[];
        constructor (type?: calculationType, value?: any, children?: Calculation[]);
        public toString();
    }
    enum calculationType {
        add,
        subtraction,
        multiply,
        division,
        group,
        power,
        value,
        placeholder,
        decision,
        boolean,
        equal,
        notEqual,
        lessThanEqual,
        lessThan,
        greaterThanEqual,
        greaterThan,
    }
}
