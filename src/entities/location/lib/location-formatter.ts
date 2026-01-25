/**
 * 주소 하이픈을 공백으로 치환
 */
export const formatAddress = (address: string): string => {
  return address.replace(/-/g, " ");
};
