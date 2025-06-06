+++
title = "a smoll c notation"
template = "page.html"
date = 2024-08-21
[taxonomies]
tags = ["development", "software", "design"]
[extra]
summary = "big O for the silicon multiprocessor, smoll c for the carbon witch"
mathjax = "tex-mml"
+++

## A Big O notation

Every software witch keeps a pouch of Big O notation in the pocket of her skirt, just in case their microprocessor overheats or a db stalls.

The pouch of Big O at hand can assist her in estimating the time complexity of her hand-woven text files. 
It tells a witch how much the toil on the silicon increases with the growth of the input, a toil which translates into latency, a latency which causes attention lose and boredom in humans.

A witch cares about humans as much as some humans care about their pets and thus tries not to cause harm of boredom by neglect. 

## a smoll c notation

Witches do not get ramped up by Big O as much as the silicon though.

Our blood-filled lunch-stained carbon selves live, thrive, suffer and die of domain complexity. 

Domain complexity can be loosely defined as the maximum number of pattern matches which have to be done before deciding on how to calculate the output.

I propose a smoll c notation as a way of estimating the number of branches you have to cover and thus the complexity of domains.

It is based on a basic idea of measuring the Cardinality of basic types by ignoring the stuff with a large capital C Cardinality by assigning a smoll c cardinality of one to it.
All is left is counting the smoll c cardinality of complex Algebraic Data Types algebraically, just as it done for the large C Cardinality.

## The Large C Cardinality

Cardinality is the number of possible instances a type can take. 

For a singleton type, as in typescript `type One = 'OneOfOne'`, it is a one. For a void type, as in `never`, it is zero. A boolean Cardinality is two, as in `OneOfTwo | TwoOfTwo`  or one bit of complexity. A sixty-four-bit `integer` has two to the power of sixty-four instances, as does a sixty-four-bit `float`. A `string` contains all the books and blog posts and fake news that have and will ever be written, which must not be true and surely bifurcates into pure nonsense, a dada of Lady Gaga.

## a smoll c cardinality

To manage this madness a witch does not tell a number from another number or a string from a string. 
All `numbers` and `strings` have a cardinality of one to her, a bazillion of instances mushed under a lack of comprehension. Why? Because they do not HAVE to be matched on.

## some types

To assign smoll c to a basic type write the number of its instances or one if it is larger than sensible.
Thus a smoll c cardinality is one for basic lanugage types except a boolean and a never. Never is never, zero not null. A boolean gets a cute little two. 

    // the types
    never // c of zero
    null // c of one
    undefined // c of one
    number // c of one
    string // c of one
    boolean // c of two

## the enums

A smoll c of an enum is the number of instances of an enum.
Why? Because it is a sum type of unit types! So we treat it as a sum of some ones.

    // the enums
    type Zero = never; // no instance, c of zero
    type One = 'OneOfOne'; // one instance, c of one
    type Two = 'OneOfTwo' | 'TwoOfTwo'; // two instances, co of two
    type Three = 'OneOfThree' | 'TwoOfThree' | 'ThreeOfThree'; // three instances, c of three
    type Four = 'OneOfFour' | 'TwoOfFour' | 'ThreeOfFour' | 'FourOfFour'; // four instances, c of four

## the algebra

The algebra of data types consists of addition and multiplication, a sum and a product, as all nice algebras do. 

It also has a cherry on the top of the algebra - the power of our domain functions.


## the sum

To count the smoll c cardinality of a union we add up the smoll c of its constituents.


Let us look at a few types.
    
    // the sums
    type SumWithOne = One | Two // c of three
    type SumWithZero = Three | Zero // c of three
    type SumOfThreeAndFourAndOne = Three | Four | One // c of eight

The union type written using `|` constitutes a sum in our algebra.
The first thing to notice is that the number of instances for each of the types is the number of singleton types constituting the union.
The second thing is that adding a `Zero` does not change the number of instances - we never a never.
The third thing is that if `number` is a One and `null` is a One `number | null` makes Two.

## the product

To count the smoll c cardinality of a product we multiply the smoll c of the fields of the record.


Let us look at a few types.

    // The products

    type ProductWithOne = { two: Two, one: One }// c of two
    type ProductWithZero = { two: Two, zero: Zero }// no instances, c of zer!
    type ProductOfThreeAndTwo = { three: Three, two: Two }  // c of six 
    type ProductOfFourAndThreeAndTwo= { four: Four, three: Three, two: Two }  // c of twenty-four
    type ProductOfFourAndThreeAndnumber= { four: Four, three: Three, number: number }  // c of twelve 
    type ProductOfFourAndThreeAndnumberornull= { four: Four, three: Three, number: number | null }  // c of twenty-four

The record type written in typescript using `{}` constitutes a product in our algebra.
The first thing to notice is that if we add an element with one instance to a record it does not change the number of instances - we multiply by one.
The second thing is that multiplying by a zero gives zero - we can never a record with never.
The third thing is that changing a number field to nullable doubles the c cardinality.
Check this out - an array of sixty-four `boolean`s has two to the power of sixty-four instances and you can store it in a sixty-four bit non-signed integer.

## a trick

Knowing the tricks of the trade, let's count the smoll c cardinality of a bunch of types to explain to ourselves why we enjoy parsing:

    // Example
    type NullableUndefinedPerson = { age?: number | null, name?: string | null, surname?: string | null, gender?: 'M' | 'F' | 'NB' | null } // smoll c of hundred thirty five 
    type NullablePerson = { age: number | null, name: string | null, surname: string | null, gender: 'M' | 'F' | 'NB' | null } // smoll c of thirty two instances
    type ParsedPerson = { age: number, name: string, surname: string, gender: 'M' | 'F' | 'NB' } | null // smoll c of four 

Yep, a messy type has a smoll c of hundred and thirty-five instances, a nullable one smoll c of thirty-two and parsed one smoll c of four.
Hurray for the parsers, `yarn install zod`. 

## the power of a function

To count the smoll c cardinality of a function we calculate the power of the smoll c of its output as the base and the smoll c of its input as the exponent.

    // Expotents
    type OneToThePowerOfTwo: (two: Two) => One //smoll c of one! - one possible implementation.
    type OneToThePowerOfThree: (three: Three) => One // smoll c of one! - one possible implementation.
    type ThreeToThePowerOfOne: (one: One) => Two // smoll c of two (two constant functions)
    type ThreeToThePowerOfOne: (one: One) => Three // smoll c of three (three constant functions)
    type ZeroToThePowerOfThree: (three: Three) => never // smoll c of zero! - zero possible implementations.
    type TwoToThePowerOfTwo: (two: Two) => Two // smoll c of four 
    type TwoAndTwoToThePowerOfTwo: ({two: Two, two2: Two}) => Two // smoll c of sixteen
    type TwoAndTwoToThePowerOfTwo: ({two: Two, two2: Two}) => Two | null // smoll c of eighty one
    type NullableTwoAndNullableTwoToThePowerOfTwo: ({two: Two | null, two2: Two | null}) => Two // smoll c of five hundred twelve
    type NullableTwoAndNullableTwoToThePowerOfTwo: ({two: Two | null, two2: Two | null}) => Two | null // smoll c of nineteen thousand six hundred eighty three

A function written either using the `function` keyword or a cute fat `=>` is the exponent of our algebra and makes a mess pretty fast.
Functional programming techniques like abstracting away optionality allow your domain functions to stay at c of sixteen even if due to noise they are operating in uncomprehensible complexity (smoll c of 1k or larger?),
but this article is not a lecture on functional programming (or is it?). 

## closures

When counting smoll c of a function, do include all the possible inputs and outputs, including immutable variables as input and mutable as output and input! It is revealing.

    // Closures
    let c: boolean = true;

    const f: (a: boolean) => boolean = // implementation 

The smoll c should be not four but `(a: boolean, c: boolean) => [boolean, boolean]` two hundred fifty-six. 
This is yet another reason not to inline your functions. Let the compilers do it.


## smoll c and code branching

On a basic level, the smoll c of your function input reflects the maximum number of branches aka pattern matches on enums / data constructors / discriminated unions your function covers. Branching in code steams from branching in data types.

## our domains 

Software witches die by their domains, their database schemas and their domain functions.
Whenever you wonder if `{ streamingURL?: string, streamingTYPE?: 'A' | 'B', streamingTOKEN?: string}` is better than `{ streaming?: { url: string, type: 'A' | 'B', token: string}` remember that the smoll c is like twelve to three and shift the nulls left to the parent function, the parent product datatype etc.
All domain complexity should always be shifted left up to the entry point of the program and then ruthlessly parsed of existence.

## some fun edge cases 

The proposed approximation of domain complexity has some funky edge cases which make sense.

    // Some edge cases
    type LessNumbers = (a: number, b : number) => number // smoll c of one
    type MoreNumbers = (a: number, b: number, c: number, d: number) => number // smoll c of one
    type ANumber = (a: number) => number // smoll c of one
    type LessBools = (a: boolean, b: boolean) =>  boolean // smoll c of sixteen
    type LessBools = (a: boolean, b: boolean, c: boolean) =>  boolean // smoll c of two hundred fifty-six
    type ANumberAndTwoBooleans = (a: number, b: boolean, c: boolean) =>  boolean // smoll c of sixteen
    type ANumberAndTwoBooleans = (a: number | null, b: boolean, c: boolean) =>  boolean // smoll c of two hundred fifty six

The assumption here is that some of the code does something with numbers - we do not know what and it is not interesting to a witch. It should never change, thus - let it go - smoll c of one.
Once you put a number and two booleans we can expect that the code will choose what to do with a number. This is a scary thought.
Once you put a nullable number and two booleans we can expect that the code will choose what to do with a number it can choose to create out of nothing in different ways. This is a very, very scary thought indeed.

## why one for the complex stuff?

I could propose more sensible mathematically constant c for complex types (number would have complexity of c as complex). At the end of the computation one could just ignore the c to the power of c as 'to large to care for'.
Yet, the easiest way to do it in estimates is to define the constant c as one and replace it with one before even starting the computation.

## thanks!

Thanks for going through the smoll c notation proposal. I hope it will make you wonder whether that null in your product type would not look better as a non-nullable field in a freshly spun discriminated union. Enjoi your brew, witch!
