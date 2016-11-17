DB_NAME="gemfinder"
dropdb "${DB_NAME}"
createdb "${DB_NAME}"

for file in ./schema/*.sql
do
    psql --single-transaction -e -d ${DB_NAME} -v ON_ERROR_STOP=1 -f "${file}"
    if [[ $? -ne 0 ]]; then
        echo -e "\e[1;31mError executing SQL file ${file}.\e[0m"
        exit 1
    fi
done

psql --single-transaction -e -d ${DB_NAME} -v ON_ERROR_STOP=1 -f seed.sql


