API_NAME=$1
VERSION=$2
SCRIPT_PATH=$(dirname "$0")

cd "$SCRIPT_PATH/src"
mkdir "./$API_NAME"
cd "./$API_NAME"
TARGET_PATH=$(pwd)/generated

echo "다음 경로에 interface 생성중... $TARGET_PATH"
npx @openapitools/openapi-generator-cli generate -i https://petstore.swagger.io/$VERSION/swagger.json -g typescript-axios -o $TARGET_PATH --skip-validate-spec --additional-properties --type-mappings=set=Array -c ../../openapitools.json -t ../mustaches
