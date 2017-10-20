SELECT * FROM properties
WHERE userid = ${sessUsrId} AND
desiredrent >= ${desiredRent};
