-- 코드를 입력하세요
SELECT ANIMAL_ID, i.NAME
FROM ANIMAL_INS i JOIN ANIMAL_OUTS o USING(ANIMAL_ID)
WHERE o.DATETIME < i.DATETIME
ORDER BY i.DATETIME