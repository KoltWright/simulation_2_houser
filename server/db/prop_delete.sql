DELETE FROM properties
WHERE id = ${propId};

SELECT * FROM properties
WHERE userid = ${sessUsrId};
