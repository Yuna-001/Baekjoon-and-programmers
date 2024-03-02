-- 코드를 입력하세요
SELECT REST_ID, REST_NAME, FOOD_TYPE, FAVORITES, ADDRESS, ROUND(AVG(r.REVIEW_SCORE),2) AS SCORE
FROM REST_INFO AS i JOIN REST_REVIEW AS r USING(REST_ID)
WHERE ADDRESS REGEXP "^서울"
GROUP BY REST_ID
ORDER BY SCORE DESC, VIEWS DESC