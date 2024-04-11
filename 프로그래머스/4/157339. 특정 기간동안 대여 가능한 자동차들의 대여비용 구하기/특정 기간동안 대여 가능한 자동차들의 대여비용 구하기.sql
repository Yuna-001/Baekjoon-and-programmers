select CAR_ID, CAR_TYPE, 30*DAILY_FEE*(100-DISCOUNT_RATE) div 100 FEE
from CAR_RENTAL_COMPANY_CAR as car join CAR_RENTAL_COMPANY_RENTAL_HISTORY as his using(CAR_ID) join CAR_RENTAL_COMPANY_DISCOUNT_PLAN as plan using(CAR_TYPE)
where CAR_TYPE in ("세단","SUV") and DURATION_TYPE = "30일 이상"
group by CAR_ID
having FEE between 500000 and 2000000-1
    and sum(if(START_DATE > "2022-11-30" or END_DATE < "2022-11-01",0,1)) = 0
order by FEE desc, CAR_TYPE asc, CAR_ID desc
