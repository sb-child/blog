export async function copyToClipboard(
  text: string,
  onSucc?: () => void,
  onErr?: (reason?: any) => void,
) {
  await navigator.clipboard.writeText(text).then(onSucc, onErr);
  // const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  // if (textareaRef.current) {
  //   textareaRef.current.value = text;
  //   textareaRef.current.select();
  //   document.execCommand('copy');
  // }
}
