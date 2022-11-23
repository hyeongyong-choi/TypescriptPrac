import { updateLanguageServiceSourceFile } from "typescript";

//튜플 - 길이,타입, 순서가 고정된 배열
const color: [number,number,number] = [255,0,255]

type HTTPResponse = [number,string];

const goodRes:HTTPResponse = [200,"OK"]

goodRes.push(123)//튜플의 한계

const responses: HTTPResponse[] = [[404,"Not Found"], [200,"OK"]]

//enum - 코드 전체에서 재사용할 수 있는 명명된 상수의 집합
enum OrderStatus{
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}
const mystatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus){
    return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.RETURNED)

enum ArrowKeys{//enum 문자열 배정
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
}


