+++
title = "a smoll c notation"
template = "page.html"
date = 2024-08-21
[taxonomies]
tags = ["development", "software", "design"]
[extra]
summary = "big O for the silicon, smoll c for the witches"
mathjax = "tex-mml"
+++

# a smoll c notation

Although every Software Witch is expected to know the Big O notation in case she gets into smoll talk with HR, she rarely uses it.
The best of us keep track of the nesting of our for loops, but it is not the loops that threaten the sanity of our minds with their intricacies. 
The for loops wreak havoc on the silicon instead. 

Our blood-filled lunch-stained carbon selves live, thrive, suffer and die of domain complexity. 

I propose a smoll c notation as a way of measuring the complexity of domains.

It is based on two basic ideas: measuring the Cardinality of simple types by ignoring the stuff with a large capital C Cardinality and assigning a smoll c cardinality of one to it and counting the smoll c cardinality of complex Algebraic Data Types algebraically.

## The Large C Cardinality

Cardinality is the number of possible instances a type can take. 

For a singleton type, as in typescript `type One = 'OneOfOne'`, it is a one. For a void type, as in `never`, it is zero. A boolean Cardinality is two, as in `OneOfTwo` or `TwoOfTwo` or one bit. A sixty-four-bit `integer` has two to sixty-four instances, as does a sixty-four-bit `float`. A `string` contains all the books and blog posts and fake news that have and will ever be written, which must not be true and surely bifurcates into pure nonsense, a dada of Lady Gaga.

## The smoll c cardinality

To manage this madness a witch does not tell a number from another number or a string from a string. 
All `numbers` and `strings` have a cardinality of one to her, a bazillion of instances mushed under a lack of comprehension.
A witch's brain works in four-bit registers, it does not handle Enum Cardinalities above sixteen. Thus she assigns the cardinality of one to them as well.

## The types

To assign smoll c to a type write the number of its instances or one if it is larger than sixteen (or does not fit four bits left).
Thus a smoll c cardinality is one for basic lanugage types except a boolean and a never. Never is never, zero not null. A boolean gets a cute little two. 

    // the types
    never // c of zero
    null // c of one
    undefined // c of one
    boolean // c of two
    number // c of one
    string // c of one

## The enums

A smool c of an enum is the number of instances of an enum which a witch comprehends and a one for the ones which a witch does not comprehend.

    // the enums
    type Zero = never; // no instance, c of zero
    type One = 'OneOfOne'; // one instance, c of one
    type Two = 'OneOfTwo' | 'TwoOfTwo'; // two instances, co of two
    type Three = 'OneOfThree' | 'TwoOfThree' | 'ThreeOfThree'; // three instances, c of three
    type Four = 'OneOfFour' | 'TwoOfFour' | 'ThreeOfFour' | 'FourOfFour'; // four instances, c of four
    type CountryCode = 'AFG' | 'ALB' | ... // forget it! c of one

## The algebra

The algebra of data types consists of addition and multiplication, a sum and a product, as all nice algebras do. 

It also has a cherry on the top - the power of our domain functions.


## The Sum

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

## The Product

To count the smoll c cardinality of a product we multiply the smoll c of the fields of the record.


Let us look at a few types.

    // The products

    type productWithOne = { two: Two, one: One }// c of two
    type productWithZero = { two: Two, zero: Zero }// no instances, c of zer!
    type productOfThreeAndTwo = { three: Three, two: Two }  // c of six 
    type productOfFourAndThreeAndTwo= { four: Four, three: Three, two: Two }  // c of twenty-four
    type productOfFourAndThreeAndnumber= { four: Four, three: Three, number: number }  // c of twelve 
    type productOfFourAndThreeAndnumberornull= { four: Four, three: Three, number: number | null }  // c of twenty-four

The record type written in typescript using `{}` constitutes a product in our algebra.
The first thing to notice is that if we add an element with one instance to a record it does not change the number of instances - we multiply by one.
The second thing is that multiplying by a zero gives zero - we can never a record with never.
The third thing is that changing a number field to nullable doubles the c cardinality.

## A trick

Knowing the tricks of the trade, let's count the smoll c cardinality of a bunch of types to explain to ourselves a trick every witch enjoys:

    // Example
    type NullableUndefinedPerson = { age?: number | null, name?: string | null, surname?: string | null, gender?: 'M' | 'F' | 'NB' | null } // smoll c of hundred thirty five 
    type NullablePerson = { age: number | null, name: string | null, surname: string | null, gender: 'M' | 'F' | 'NB' | null } // smoll c of thirty two instances
    type ParsedPerson = { age: number, name: string, surname: string, gender: 'M' | 'F' | 'NB' } | null // smoll c of four 

Yep, a messy type has a smoll c of hundred and thirty-five instances, a nullable one thirty-two and parsed one four.
Hurray for the parsers, `yarn install zod`. 

## The power of a function

To count the smoll c cardinality of a function we calculate the power of the smoll c of its output as the base and the smoll c of its input as the exponent.

    // Expotents
    type oneToThePowerOfTwo: (two: Two) => One //smoll c of one! - one possible implementation.
    type oneToThePowerOfThree: (three: Three) => One // smoll c of one! - one possible implementation.
    type threeToThePowerOfOne: (one: One) => Two // smoll c of two (two constant functions)
    type threeToThePowerOfOne: (one: One) => Three // smoll c of three (three constant functions)
    type zeroToThePowerOfThree: (three: Three) => never // smoll c of zero! - zero possible implementations.
    type twoToThePowerOfTwo: (two: Two) => Two // smoll c of four 
    type twoAndTwoToThePowerOfTwo: ({two: Two, two2: Two}) => Two // smoll c of sixteen
    type twoAndTwoToThePowerOfTwo: ({two: Two, two2: Two}) => Two | null // smoll c of eighty one
    type nullableTwoAndNullableTwoToThePowerOfTwo: ({two: Two | null, two2: Two | null}) => Two // smoll c of five hundred twelve
    type nullableTwoAndNullableTwoToThePowerOfTwo: ({two: Two | null, two2: Two | null}) => Two | null // smoll c of nineteen thousand six hundred eighty three

A function written either using the `function` keyword or a cute fat `=>` is the exponent of our algebra and makes a mess pretty fast.
Functional programming techniques like abstracting away optionality allow your domain functions to stay at c of sixteen even if due to noise they are operating in uncomprehensible complexity (smoll c of 1k or larger?),
but this article is not a course on functional programming. 

## Closures

When counting smoll c of a function, do include all the possible inputs and outputs, including immutable variables as input and mutable as output and input! It makes it revealing.

    // Closures
    let c: boolean = true;

    const f: (a: boolean) => boolean = // implementation 

The smoll c should be not four but `(a: boolean, c: boolean) => [boolean, boolean]` two hundred fifty-six. 
This is yet another reason not to inline your functions. Let the compilers do it.

## smoll c and code branching

On a basic level, the smoll c of your function input reflects the number of branches aka pattern matches your function covers.

## Our domains 

Software witches die by their domains, their database schemas and their domain functions.
Whenever you wonder if `{ streamingURL?: string, streamingTYPE?: 'A' | 'B', streamingTOKEN?: string}` is better than `{ streaming?: { url: string, type: 'A' | 'B', token: string}` remember that the smoll c is like twelve to three and shift left.
All domain complexity should always be shifted left up to the entry point of the program and then ruthlessly parsed of existence.

## Some fun edge cases 

The proposed approximation of domain complexity has some funky edge cases which make sense.

    // Some edge cases
    type lessNumbers = (a: number, b : number) => number // smoll c of one
    type moreNumbers = (a: number, b: number, c: number, d: number) => number // smoll c of one
    type aNumber = (a: number) => number // smoll c of one
    type lessBools = (a: boolean, b: boolean) =>  boolean // smoll c of sixteen
    type lessBools = (a: boolean, b: boolean, c: boolean) =>  boolean // smoll c of two hundred fifty-six
    type aNumberAndTwoBooleans = (a: number, b: boolean, c: boolean) =>  boolean // smoll c of sixteen
    type aNumberAndTwoBooleans = (a: number | null, b: boolean, c: boolean) =>  boolean // smoll c of two hundred fifty six

The assumption here is that some of the code does something with numbers - we do not know what and it is not interesting to a witch. It should never change, thus - let it go - smoll c of one.
Once you put a number and two enums we can expect that the code will choose what to do with a number. This is a scary thought.
Once you put a nullable number and two enums we can expect that the code will choose what to do with a number it can choose to create out of nothing in different ways. This is a very, very scary thought indeed.

## Thanks!

Thanks for going through the smoll c notation proposal I hope it will make you wonder whether that null in your product type would not look better as a non-nullable field in a freshly spun discriminated union. Enjoi your brew, witch!
