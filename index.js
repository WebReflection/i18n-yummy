function i18n(template) {
  for (var
    info = i18n.db[i18n.locale][template.join('\x01')],
    out = [info.t[0]],
    i = 1, length = info.t.length; i < length; i++
  ) out[i] = arguments[1 + info.v[i - 1]] + info.t[i];
  return out.join('');
}