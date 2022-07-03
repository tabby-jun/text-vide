import { textVide } from './index';

const options = {
  fixationPoint: 3,
};

const ignoreSet = new Set<string>(['B', 'META', 'LINK', 'SCRIPT', 'STYLE']);

const processNode = (parentElement: Node) => {
  for (let i = 0; parentElement.childNodes[i] != undefined; i++) {
    if (parentElement.childNodes[i] instanceof Element) {
      const ele = parentElement.childNodes[i] as Element;
      if (ele.classList.contains('bnc')) continue;
    }
    if (
      parentElement.childNodes[i].nodeName == '#text' &&
      parentElement.childNodes[i].textContent?.trim().length != 0
    ) {
      const recentNode = parentElement.childNodes[i] as HTMLElement;
      let newHTML = '';
      recentNode.textContent?.split(/(\s+|\S+)/).forEach(word => {
        newHTML += textVide(word, options);
      });
      const newDiv = document.createElement('span');
      newDiv.innerHTML = newHTML;
      newDiv.classList.add('bnc');
      parentElement.replaceChild(newDiv, recentNode);
    }
  }
};

const processDocumentBody = (element: Document | null) => {
  if (element == null) return;
  if (element.body == undefined) return;
  const collection = element.body.getElementsByTagName('*');

  for (let i = 0; collection[i] != undefined; i++) {
    const thing = collection[i];
    const nodeName = thing.nodeName;

    if (ignoreSet.has(nodeName)) continue;
    if (thing.nodeType != 1) continue;
    if (thing.nodeName === 'IFRAME') {
      const iframe = thing as HTMLIFrameElement;
      processDocumentBody(iframe.contentDocument);
    } else {
      const ele = collection[i] as HTMLElement;
      if (ele.childNodes.length == 0) continue;
      if (ele.classList.contains('bnc')) continue;
      processNode(ele);
    }
  }
};

processDocumentBody(document);
