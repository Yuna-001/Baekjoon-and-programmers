-- 코드를 입력하세요
select APNT_NO, PT_NAME, PT_NO, dr.MCDP_CD, DR_NAME, APNT_YMD
from PATIENT pt join APPOINTMENT ap using(PT_NO) join DOCTOR dr on ap.MDDR_ID=dr.DR_ID
where APNT_YMD like "2022-04-13%" and dr.MCDP_CD="CS" and (APNT_CNCL_YN is null or APNT_CNCL_YN = "N")
order by APNT_YMD