import {StyleSheet} from 'react-native';
export const colors = {
  darkBg: '#222',
  lightBg: '#333',
  darkHl: '#666',
  lightHl: '#888',
  pink: '#ea3372',
  text: '#fff',
  textSec: '#aaa',
  login: '#66CDAA',
  icon: '#239237',
};
export const gs = StyleSheet.create({
  sectionContainer: {
    paddingVertical: 24,
    paddingHorizontal: 32,
    marginBottom: 8,
    backgroundColor: colors.lightBg,
  },
  sectionTitle: {
    fontWeight: '700',
    color: colors.text,
    fontSize: 15,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 24,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.text,
    fontSize: 30,
  },
  smallText: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.text,
  },
  divider: {
    borderBottomColor: '#444',
    borderBottomWidth: 1,
    marginVertical: 24,
  },
  absoluteFull: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.pink,
    borderRadius: 100,
  },
  loginContainer: {
    flex: 1,
    backgroundColor: colors.login,
  },
});