INSERT INTO properties
(propname, propdesc, address, city, state, zip,
imageurl, loanamount, monthlymorgage, desiredrent, recommendedrent, userid)
VALUES(${propname}, ${propdesc}, ${address}, ${city}, ${state}, ${zip},
${imageurl}, ${loanamount}, ${monthlymorgage}, ${desiredrent}, ${recommendedrent}, ${userid});

SELECT * FROM properties
WHERE userid = ${userid};
