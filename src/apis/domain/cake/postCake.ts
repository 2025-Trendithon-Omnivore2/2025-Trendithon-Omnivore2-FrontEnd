import { postResponse } from "@apis/instance";

export const postCake = async (cakeName: string): Promise<number | null> => {
  const colorMapping: { [key: string]: string } = {
    "부드러운 스트로베리": "STRAWBERRY",
    "상큼한 레몬": "LEMON",
    "깔끔한 녹차": "GREEN_TEA",
    "유쾌한 티라미수": "TIRAMISU",
    "순백의 생크림": "CREAM",
    "조화로운 블루베리": "BLUEBERRY",
    "신중한 피스타치오": "PISTACHIO",
    "논리적인 초코": "CHOCOLATE",
  };

  const color = colorMapping[cakeName] || "NOTHING";

  const response = await postResponse<
    { color: string },
    { statusCode: number; message: string; data: { cakeId: number } }
  >("/api/cakes", { color });

  if (response && response.data && response.data.cakeId) {
    localStorage.setItem("cakeId", response.data.cakeId.toString());
    return response.data.cakeId;
  }

  return null;
};
