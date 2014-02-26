var _ = _ || {};
intellisense.annotate(_.each, function(obj, iterator, context){
    /// <summary>
    /// Iterates over a of elements, yielding each in turn to an function.
    /// The is bound to the object, if one is passed.
    /// Each invocation of is called with three arguments: "(element, index, list)".
    /// If is a JavaScript object, 's arguments will be "(value, key, list)".
    /// Delegates to the native function if it exists, and returns the original for chaining.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
    /// <param name="iterator" type="" optional="false"></param>
    /// <param name="context" type="" optional="false"></param>
});
intellisense.annotate(_.map, function(obj, iterator, context){
    /// <summary>
    /// Produces a new array of values by mapping each value in through a transformation function ().
    /// If the native method exists, it will be used instead.
    /// If is a JavaScript object, 's arguments will be "(value, key, list)".
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
    /// <param name="iterator" type="" optional="false"></param>
    /// <param name="context" type="" optional="false"></param>
});
intellisense.annotate(_.reduce, function(obj, iterator, memo, context){
    /// <summary>
    /// Also known as and , boils down a of values into a single value.
    /// is the initial state of the reduction, and each successive step of it should be returned by .
    /// The iterator is passed four arguments: the "memo", then the "value" and "index" (or key) of the iteration, and finally a reference to the entire "list".
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
    /// <param name="iterator" type="" optional="false"></param>
    /// <param name="memo" type="" optional="false"></param>
    /// <param name="context" type="" optional="false"></param>
});
intellisense.annotate(_.reduceRight, function(obj, iterator, memo, context){
    /// <summary>
    /// The right-associative version of .
    /// Delegates to the JavaScript 1.8 version of , if it exists.
    /// is not as useful in JavaScript as it would be in a language with lazy evaluation.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
    /// <param name="iterator" type="" optional="false"></param>
    /// <param name="memo" type="" optional="false"></param>
    /// <param name="context" type="" optional="false"></param>
});
intellisense.annotate(_.find, function(obj, iterator, context){
    /// <summary>
    /// Looks through each value in the , returning the first one that passes a truth test (), or "undefined" if no value passes the test.
    /// The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
    /// <param name="iterator" type="" optional="false"></param>
    /// <param name="context" type="" optional="false"></param>
});
intellisense.annotate(_.filter, function(obj, iterator, context){
    /// <summary>
    /// Looks through each value in the , returning an array of all the values that pass a truth test ().
    /// Delegates to the native method, if it exists.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
    /// <param name="iterator" type="" optional="false"></param>
    /// <param name="context" type="" optional="false"></param>
});
intellisense.annotate(_.where, function(obj, attrs, first){
    /// <summary>
    /// Looks through each value in the , returning an array of all the values that contain all of the key-value pairs listed in .
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
    /// <param name="attrs" type="" optional="false"></param>
    /// <param name="first" type="" optional="false"></param>
});
intellisense.annotate(_.findWhere, function(obj, attrs){
    /// <summary>
    /// Looks through the and returns the <i>first</i> value that matches all of the key-value pairs listed in .
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
    /// <param name="attrs" type="" optional="false"></param>
});
intellisense.annotate(_.reject, function(obj, iterator, context){
    /// <summary>
    /// Returns the values in without the elements that the truth test () passes.
    /// The opposite of .
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
    /// <param name="iterator" type="" optional="false"></param>
    /// <param name="context" type="" optional="false"></param>
});
intellisense.annotate(_.every, function(obj, iterator, context){
    /// <summary>
    /// Returns <i>true</i> if all of the values in the pass the truth test.
    /// Delegates to the native method , if present.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
    /// <param name="iterator" type="" optional="false"></param>
    /// <param name="context" type="" optional="false"></param>
});
intellisense.annotate(_.some, function(obj, iterator, context){
    /// <summary>
    /// Returns <i>true</i> if any of the values in the pass the truth test.
    /// Short-circuits and stops traversing the list if a true element is found.
    /// Delegates to the native method , if present.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
    /// <param name="iterator" type="" optional="false"></param>
    /// <param name="context" type="" optional="false"></param>
});
intellisense.annotate(_.contains, function(obj, target){
    /// <summary>
    /// Returns <i>true</i> if the is present in the .
    /// Uses internally, if is an Array.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
    /// <param name="target" type="" optional="false"></param>
});
intellisense.annotate(_.invoke, function(obj, method){
    /// <summary>
    /// Calls the method named by on each value in the .
    /// Any extra arguments passed to will be forwarded on to the method invocation.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
    /// <param name="method" type="" optional="false"></param>
});
intellisense.annotate(_.pluck, function(obj, key){
    /// <summary>
    /// A convenient version of what is perhaps the most common use-case for : extracting a list of property values.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
    /// <param name="key" type="" optional="false"></param>
});
intellisense.annotate(_.max, function(obj, iterator, context){
    /// <summary>
    /// Returns the maximum value in .
    /// If an function is provided, it will be used on each value to generate the criterion by which the value is ranked.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
    /// <param name="iterator" type="" optional="false"></param>
    /// <param name="context" type="" optional="false"></param>
});
intellisense.annotate(_.min, function(obj, iterator, context){
    /// <summary>
    /// Returns the minimum value in .
    /// If an function is provided, it will be used on each value to generate the criterion by which the value is ranked.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
    /// <param name="iterator" type="" optional="false"></param>
    /// <param name="context" type="" optional="false"></param>
});
intellisense.annotate(_.sortBy, function(obj, value, context){
    /// <summary>
    /// Returns a (stably) sorted copy of , ranked in ascending order by the results of running each value through .
    /// Iterator may also be the string name of the property to sort by (eg.
    /// "length").
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
    /// <param name="value" type="" optional="false"></param>
    /// <param name="context" type="" optional="false"></param>
});
intellisense.annotate(_.groupBy, function(obj, value, context){
    /// <summary>
    /// Splits a collection into sets, grouped by the result of running each value through .
    /// If is a string instead of a function, groups by the property named by on each of the values.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
    /// <param name="value" type="" optional="false"></param>
    /// <param name="context" type="" optional="false"></param>
});
intellisense.annotate(_.indexBy, function(obj, value, context){
    /// <summary>
    /// Given a , and an function that returns a key for each element in the list (or a property name), returns an object with an index of each item.
    /// Just like <a href="#groupBy">groupBy</a>, but for when you know your keys are unique.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
    /// <param name="value" type="" optional="false"></param>
    /// <param name="context" type="" optional="false"></param>
});
intellisense.annotate(_.countBy, function(obj, value, context){
    /// <summary>
    /// Sorts a list into groups and returns a count for the number of objects in each group.
    /// Similar to "groupBy", but instead of returning a list of values, returns a count for the number of values in that group.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
    /// <param name="value" type="" optional="false"></param>
    /// <param name="context" type="" optional="false"></param>
});
intellisense.annotate(_.shuffle, function(obj){
    /// <summary>
    /// Returns a shuffled copy of the , using a version of the <a href="http://en.
    wikipedia.
    org/wiki/Fisher%E2%80%93Yates_shuffle">Fisher-Yates shuffle</a>.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.sample, function(obj, n, guard){
    /// <summary>
    /// Produce a random sample from the .
    /// Pass a number to return random elements from the list.
    /// Otherwise a single random item will be returned.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
    /// <param name="n" type="" optional="false"></param>
    /// <param name="guard" type="" optional="false"></param>
});
intellisense.annotate(_.toArray, function(obj){
    /// <summary>
    /// Creates a real Array from the (anything that can be iterated over).
    /// Useful for transmuting the object.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.size, function(obj){
    /// <summary>
    /// Return the number of values in the .
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.first, function(array, n, guard){
    /// <summary>
    /// Returns the first element of an .
    /// Passing will return the first elements of the array.
    /// </summary>
    /// <param name="array" type="" optional="false"></param>
    /// <param name="n" type="" optional="false"></param>
    /// <param name="guard" type="" optional="false"></param>
});
intellisense.annotate(_.initial, function(array, n, guard){
    /// <summary>
    /// Returns everything but the last entry of the array.
    /// Especially useful on the arguments object.
    /// Pass to exclude the last elements from the result.
    /// </summary>
    /// <param name="array" type="" optional="false"></param>
    /// <param name="n" type="" optional="false"></param>
    /// <param name="guard" type="" optional="false"></param>
});
intellisense.annotate(_.last, function(array, n, guard){
    /// <summary>
    /// Returns the last element of an .
    /// Passing will return the last elements of the array.
    /// </summary>
    /// <param name="array" type="" optional="false"></param>
    /// <param name="n" type="" optional="false"></param>
    /// <param name="guard" type="" optional="false"></param>
});
intellisense.annotate(_.rest, function(array, n, guard){
    /// <summary>
    /// Returns the of the elements in an array.
    /// Pass an to return the values of the array from that index onward.
    /// </summary>
    /// <param name="array" type="" optional="false"></param>
    /// <param name="n" type="" optional="false"></param>
    /// <param name="guard" type="" optional="false"></param>
});
intellisense.annotate(_.compact, function(array){
    /// <summary>
    /// Returns a copy of the with all falsy values removed.
    /// In JavaScript, <i>false</i>, <i>null</i>, <i>0</i>, <i>""</i>, <i>undefined</i> and <i>NaN</i> are all falsy.
    /// </summary>
    /// <param name="array" type="" optional="false"></param>
});
intellisense.annotate(_.flatten, function(array, shallow){
    /// <summary>
    /// Flattens a nested (the nesting can be to any depth).
    /// If you pass , the array will only be flattened a single level.
    /// </summary>
    /// <param name="array" type="" optional="false"></param>
    /// <param name="shallow" type="" optional="false"></param>
});
intellisense.annotate(_.without, function(array){
    /// <summary>
    /// Returns a copy of the with all instances of the removed.
    /// </summary>
    /// <param name="array" type="" optional="false"></param>
});
//error on partition

intellisense.annotate(_.union, function(){
    /// <summary>
    /// Computes the union of the passed-in : the list of unique items, in order, that are present in one or more of the .
    /// </summary>
});
intellisense.annotate(_.intersection, function(array){
    /// <summary>
    /// Computes the list of values that are the intersection of all the .
    /// Each value in the result is present in each of the .
    /// </summary>
    /// <param name="array" type="" optional="false"></param>
});
intellisense.annotate(_.difference, function(array){
    /// <summary>
    /// Similar to , but returns the values from that are not present in the arrays.
    /// </summary>
    /// <param name="array" type="" optional="false"></param>
});
intellisense.annotate(_.uniq, function(array, isSorted, iterator, context){
    /// <summary>
    /// Produces a duplicate-free version of the , using <i>===</i> to test object equality.
    /// If you know in advance that the is sorted, passing <i>true</i> for will run a much faster algorithm.
    /// If you want to compute unique items based on a transformation, pass an function.
    /// </summary>
    /// <param name="array" type="" optional="false"></param>
    /// <param name="isSorted" type="" optional="false"></param>
    /// <param name="iterator" type="" optional="false"></param>
    /// <param name="context" type="" optional="false"></param>
});
intellisense.annotate(_.zip, function(){
    /// <summary>
    /// Merges together the values of each of the with the values at the corresponding position.
    /// Useful when you have separate data sources that are coordinated through matching array indexes.
    /// If you're working with a matrix of nested arrays, "_.zip.apply" can transpose the matrix in a similar fashion.
    /// </summary>
});
intellisense.annotate(_.object, function(list, values){
    /// <summary>
    /// Converts arrays into objects.
    /// Pass either a single list of "[key, value]" pairs, or a list of keys, and a list of values.
    /// If duplicate keys exist, the last value wins.
    /// </summary>
    /// <param name="list" type="" optional="false"></param>
    /// <param name="values" type="" optional="false"></param>
});
intellisense.annotate(_.indexOf, function(array, item, isSorted){
    /// <summary>
    /// Returns the index at which can be found in the , or <i>-1</i> if value is not present in the .
    /// Uses the native function unless it's missing.
    /// If you're working with a large array, and you know that the array is already sorted, pass "true" for to use a faster binary search ...
    /// or, pass a number as the third argument in order to look for the first matching value in the array after the given index.
    /// </summary>
    /// <param name="array" type="" optional="false"></param>
    /// <param name="item" type="" optional="false"></param>
    /// <param name="isSorted" type="" optional="false"></param>
});
intellisense.annotate(_.lastIndexOf, function(array, item, from){
    /// <summary>
    /// Returns the index of the last occurrence of in the , or <i>-1</i> if value is not present.
    /// Uses the native function if possible.
    /// Pass to start your search at a given index.
    /// </summary>
    /// <param name="array" type="" optional="false"></param>
    /// <param name="item" type="" optional="false"></param>
    /// <param name="from" type="" optional="false"></param>
});
intellisense.annotate(_.sortedIndex, function(array, obj, iterator, context){
    /// <summary>
    /// Uses a binary search to determine the index at which the <i>should</i> be inserted into the in order to maintain the 's sorted order.
    /// If an function is provided, it will be used to compute the sort ranking of each value, including the you pass.
    /// Iterator may also be the string name of the property to sort by (eg.
    /// "length").
    /// </summary>
    /// <param name="array" type="" optional="false"></param>
    /// <param name="obj" type="" optional="false"></param>
    /// <param name="iterator" type="" optional="false"></param>
    /// <param name="context" type="" optional="false"></param>
});
intellisense.annotate(_.range, function(start, stop, step){
    /// <summary>
    /// A function to create flexibly-numbered lists of integers, handy for "each" and "map" loops.
    /// , if omitted, defaults to <i>0</i>; defaults to <i>1</i>.
    /// Returns a list of integers from to , incremented (or decremented) by , exclusive.
    /// Note that ranges that before they are considered to be zero-length instead of negative — if you'd like a negative range, use a negative .
    /// </summary>
    /// <param name="start" type="" optional="false"></param>
    /// <param name="stop" type="" optional="false"></param>
    /// <param name="step" type="" optional="false"></param>
});
intellisense.annotate(_.bind, function(func, context){
    /// <summary>
    /// Bind a to an , meaning that whenever the function is called, the value of <i>this</i> will be the .
    /// Optionally, pass to the to pre-fill them, also known as .
    /// </summary>
    /// <param name="func" type="" optional="false"></param>
    /// <param name="context" type="" optional="false"></param>
});
intellisense.annotate(_.bindAll, function(obj){
    /// <summary>
    /// Binds a number of methods on the , specified by , to be run in the context of that object whenever they are invoked.
    /// Very handy for binding functions that are going to be used as event handlers, which would otherwise be invoked with a fairly useless <i>this</i>.
    /// are required.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.partial, function(func){
    /// <summary>
    /// Partially apply a function by filling in any number of its , <i>without</i> changing its dynamic "this" value.
    /// A close cousin of <a href="#bind">bind</a>.
    /// You may pass "_" in your list of to specify an argument that should not be pre-filled, but left open to supply at call-time.
    /// </summary>
    /// <param name="func" type="" optional="false"></param>
});
intellisense.annotate(_.memoize, function(func, hasher){
    /// <summary>
    /// Memoizes a given by caching the computed result.
    /// Useful for speeding up slow-running computations.
    /// If passed an optional , it will be used to compute the hash key for storing the result, based on the arguments to the original function.
    /// The default just uses the first argument to the memoized function as the key.
    /// </summary>
    /// <param name="func" type="" optional="false"></param>
    /// <param name="hasher" type="" optional="false"></param>
});
intellisense.annotate(_.delay, function(func, wait){
    /// <summary>
    /// Much like , invokes after milliseconds.
    /// If you pass the optional , they will be forwarded on to the when it is invoked.
    /// </summary>
    /// <param name="func" type="" optional="false"></param>
    /// <param name="wait" type="" optional="false"></param>
});
intellisense.annotate(_.defer, function(func){
    /// <summary>
    /// Defers invoking the until the current call stack has cleared, similar to using with a delay of 0.
    /// Useful for performing expensive computations or HTML rendering in chunks without blocking the UI thread from updating.
    /// If you pass the optional , they will be forwarded on to the when it is invoked.
    /// </summary>
    /// <param name="func" type="" optional="false"></param>
});
intellisense.annotate(_.throttle, function(func, wait, options){
    /// <summary>
    /// Creates and returns a new, throttled version of the passed function, that, when invoked repeatedly, will only actually call the original function at most once per every milliseconds.
    /// Useful for rate-limiting events that occur faster than you can keep up with.
    /// </summary>
    /// <param name="func" type="" optional="false"></param>
    /// <param name="wait" type="" optional="false"></param>
    /// <param name="options" type="" optional="false"></param>
});
intellisense.annotate(_.debounce, function(func, wait, immediate){
    /// <summary>
    /// Creates and returns a new debounced version of the passed function which will postpone its execution until after milliseconds have elapsed since the last time it was invoked.
    /// Useful for implementing behavior that should only happen <i>after</i> the input has stopped arriving.
    /// For example: rendering a preview of a Markdown comment, recalculating a layout after the window has stopped being resized, and so on.
    /// </summary>
    /// <param name="func" type="" optional="false"></param>
    /// <param name="wait" type="" optional="false"></param>
    /// <param name="immediate" type="" optional="false"></param>
});
intellisense.annotate(_.once, function(func){
    /// <summary>
    /// Creates a version of the function that can only be called one time.
    /// Repeated calls to the modified function will have no effect, returning the value from the original call.
    /// Useful for initialization functions, instead of having to set a boolean flag and then check it later.
    /// </summary>
    /// <param name="func" type="" optional="false"></param>
});
intellisense.annotate(_.after, function(times, func){
    /// <summary>
    /// Creates a version of the function that will only be run after first being called times.
    /// Useful for grouping asynchronous responses, where you want to be sure that all the async calls have finished, before proceeding.
    /// </summary>
    /// <param name="times" type="" optional="false"></param>
    /// <param name="func" type="" optional="false"></param>
});
//error on now

intellisense.annotate(_.wrap, function(func, wrapper){
    /// <summary>
    /// Wraps the first inside of the function, passing it as the first argument.
    /// This allows the to execute code before and after the runs, adjust the arguments, and execute it conditionally.
    /// </summary>
    /// <param name="func" type="" optional="false"></param>
    /// <param name="wrapper" type="" optional="false"></param>
});
intellisense.annotate(_.compose, function(){
    /// <summary>
    /// Returns the composition of a list of , where each function consumes the return value of the function that follows.
    /// In math terms, composing the functions <i>f()</i>, <i>g()</i>, and <i>h()</i> produces <i>f(g(h()))</i>.
    /// </summary>
});
intellisense.annotate(_.keys, function(){
    /// <summary>
    /// Retrieve all the names of the 's properties.
    /// </summary>
});
intellisense.annotate(_.values, function(obj){
    /// <summary>
    /// Return all of the values of the 's properties.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.pairs, function(obj){
    /// <summary>
    /// Convert an object into a list of "[key, value]" pairs.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.invert, function(obj){
    /// <summary>
    /// Returns a copy of the where the keys have become the values and the values the keys.
    /// For this to work, all of your object's values should be unique and string serializable.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
//error on object-functions

intellisense.annotate(_.extend, function(obj){
    /// <summary>
    /// Copy all of the properties in the objects over to the object, and return the object.
    /// It's in-order, so the last source will override properties of the same name in previous arguments.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.pick, function(obj){
    /// <summary>
    /// Return a copy of the , filtered to only have values for the whitelisted (or array of valid keys).
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.omit, function(obj){
    /// <summary>
    /// Return a copy of the , filtered to omit the blacklisted (or array of keys).
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.defaults, function(obj){
    /// <summary>
    /// Fill in "undefined" properties in with values from the objects, and return the .
    /// As soon as the property is filled, further defaults will have no effect.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.clone, function(obj){
    /// <summary>
    /// Create a shallow-copied clone of the .
    /// Any nested objects or arrays will be copied by reference, not duplicated.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.tap, function(obj, interceptor){
    /// <summary>
    /// Invokes with the , and then returns .
    /// The primary purpose of this method is to "tap into" a method chain, in order to perform operations on intermediate results within the chain.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
    /// <param name="interceptor" type="" optional="false"></param>
});
intellisense.annotate(_.has, function(obj, key){
    /// <summary>
    /// Does the object contain the given key? Identical to "object.hasOwnProperty(key)", but uses a safe reference to the "hasOwnProperty" function, in case it's been <a href="http://www.devthought.com/2012/01/18/an-object-is-not-a-hash/">overridden accidentally</a>.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
    /// <param name="key" type="" optional="false"></param>
});
//error on property


//error on matches

intellisense.annotate(_.isEqual, function(a, b){
    /// <summary>
    /// Performs an optimized deep comparison between the two objects, to determine if they should be considered equal.
    /// </summary>
    /// <param name="a" type="" optional="false"></param>
    /// <param name="b" type="" optional="false"></param>
});
intellisense.annotate(_.isEmpty, function(obj){
    /// <summary>
    /// Returns <i>true</i> if contains no values (no enumerable own-properties).
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.isElement, function(obj){
    /// <summary>
    /// Returns <i>true</i> if is a DOM element.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.isArray, function(){
    /// <summary>
    /// Returns <i>true</i> if is an Array.
    /// </summary>
});
intellisense.annotate(_.isObject, function(obj){
    /// <summary>
    /// Returns <i>true</i> if is an Object.
    /// Note that JavaScript arrays and functions are objects, while (normal) strings and numbers are not.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.isArguments, function(obj){
    /// <summary>
    /// Returns <i>true</i> if is an Arguments object.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.isFunction, function(obj){
    /// <summary>
    /// Returns <i>true</i> if is a Function.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.isString, function(obj){
    /// <summary>
    /// Returns <i>true</i> if is a String.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.isNumber, function(obj){
    /// <summary>
    /// Returns <i>true</i> if is a Number (including "NaN").
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.isFinite, function(obj){
    /// <summary>
    /// Returns <i>true</i> if is a finite Number.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.isBoolean, function(obj){
    /// <summary>
    /// Returns <i>true</i> if is either <i>true</i> or <i>false</i>.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.isDate, function(obj){
    /// <summary>
    /// Returns <i>true</i> if is a Date.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.isRegExp, function(obj){
    /// <summary>
    /// Returns <i>true</i> if is a RegExp.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.isNaN, function(obj){
    /// <summary>
    /// Returns <i>true</i> if is <i>NaN</i>.
    /// Note: this is not the same as the native function, which will also return true for many other not-number values, such as "undefined".
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.isNull, function(obj){
    /// <summary>
    /// Returns <i>true</i> if the value of is <i>null</i>.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.isUndefined, function(obj){
    /// <summary>
    /// Returns <i>true</i> if is <i>undefined</i>.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.noConflict, function(){
    /// <summary>
    /// Give control of the "_" variable back to its previous owner.
    /// Returns a reference to the object.
    /// </summary>
});
intellisense.annotate(_.identity, function(value){
    /// <summary>
    /// Returns the same value that is used as the argument.
    /// In math: "f(x) = x" This function looks useless, but is used throughout Underscore as a default iterator.
    /// </summary>
    /// <param name="value" type="" optional="false"></param>
});
//error on constant

intellisense.annotate(_.times, function(n, iterator, context){
    /// <summary>
    /// Invokes the given iterator function times.
    /// Each invocation of is called with an "index" argument.
    /// Produces an array of the returned values.
    /// <i>Note: this example uses the <a href="#chaining">chaining syntax</a></i>.
    /// </summary>
    /// <param name="n" type="" optional="false"></param>
    /// <param name="iterator" type="" optional="false"></param>
    /// <param name="context" type="" optional="false"></param>
});
intellisense.annotate(_.random, function(min, max){
    /// <summary>
    /// Returns a random integer between and , inclusive.
    /// If you only pass one argument, it will return a number between "0" and that number.
    /// </summary>
    /// <param name="min" type="" optional="false"></param>
    /// <param name="max" type="" optional="false"></param>
});
intellisense.annotate(_.mixin, function(obj){
    /// <summary>
    /// Allows you to extend Underscore with your own utility functions.
    /// Pass a hash of "{name: function}" definitions to have your functions added to the Underscore object, as well as the OOP wrapper.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
intellisense.annotate(_.uniqueId, function(prefix){
    /// <summary>
    /// Generate a globally-unique id for client-side models or DOM elements that need one.
    /// If is passed, the id will be appended to it.
    /// </summary>
    /// <param name="prefix" type="" optional="false"></param>
});
intellisense.annotate(_.escape, function(string){
    /// <summary>
    /// Escapes a string for insertion into HTML, replacing "&", "<", ">", """, and "'" characters.
    /// </summary>
    /// <param name="string" type="" optional="false"></param>
});
intellisense.annotate(_.unescape, function(string){
    /// <summary>
    /// The opposite of <a href="#escape"></a>, replaces "&amp;", "&lt;", "&gt;", "&quot;", and "&#x27;" with their unescaped counterparts.
    /// </summary>
    /// <param name="string" type="" optional="false"></param>
});
intellisense.annotate(_.result, function(object, property){
    /// <summary>
    /// If the value of the named is a function then invoke it with the as context; otherwise, return it.
    /// </summary>
    /// <param name="object" type="" optional="false"></param>
    /// <param name="property" type="" optional="false"></param>
});
intellisense.annotate(_.template, function(text, data, settings){
    /// <summary>
    /// Compiles JavaScript templates into functions that can be evaluated for rendering.
    /// Useful for rendering complicated bits of HTML from JSON data sources.
    /// Template functions can both interpolate variables, using "<%= … %>", as well as execute arbitrary JavaScript code, with "<% … %>".
    /// If you wish to interpolate a value, and have it be HTML-escaped, use "<%- … %>" When you evaluate a template function, pass in a object that has properties corresponding to the template's free variables.
    /// If you're writing a one-off, you can pass the object as the second parameter to in order to render immediately instead of returning a template function.
    /// The argument should be a hash containing any "_.templateSettings" that should be overridden.
    /// </summary>
    /// <param name="text" type="" optional="false"></param>
    /// <param name="data" type="" optional="false"></param>
    /// <param name="settings" type="" optional="false"></param>
});
intellisense.annotate(_.chain, function(obj){
    /// <summary>
    /// Returns a wrapped object.
    /// Calling methods on this object will continue to return wrapped objects until "value" is used.
    /// </summary>
    /// <param name="obj" type="" optional="false"></param>
});
//error on value

