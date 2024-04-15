select count(*) FISH_COUNT, MAX(LENGTH) MAX_LENGTH, FISH_TYPE
from FISH_INFO
group by FISH_TYPE
having avg(ifnull(LENGTH,10)) >= 33
order by FISH_TYPE