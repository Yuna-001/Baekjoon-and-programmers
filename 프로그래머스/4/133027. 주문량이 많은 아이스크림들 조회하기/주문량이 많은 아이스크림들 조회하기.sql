-- 코드를 입력하세요
SELECT h.FLAVOR
FROM FIRST_HALF h JOIN JULY j USING(FLAVOR)
GROUP BY h.FLAVOR
ORDER BY SUM(h.TOTAL_ORDER)+SUM(j.TOTAL_ORDER) DESC
LIMIT 3