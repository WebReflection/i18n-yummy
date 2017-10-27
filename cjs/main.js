module.exports = function i18n(template) {
  for (var
    k = template.join('\x01'),
    info = ((i18n.db || {})[k] || {})[i18n.locale] || {v: []},
    t = info.t || template, out = [t[0]],
    i = 1, length = t.length; i < length; i++
  ) out[i] = arguments[1 + (info.v[i - 1] || 0)] + t[i];
  return out.join('');
};
