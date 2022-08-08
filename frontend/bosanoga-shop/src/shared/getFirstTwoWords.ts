/**
 * Возвращает заданное количество слов предложения.
 * **/
export default function getFirstTwoWords(sentence: string) {
	return sentence.split(' ').slice(0,4).join(' ');
}