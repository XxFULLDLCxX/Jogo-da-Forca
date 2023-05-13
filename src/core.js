export default function removeDiacritics(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036F]|[\u0080-\u00FF]/g, '');
}