import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';

const STUDENT = {
  name: 'Eykel Agitha Kembaren',
  nim: '243303621275',
  major: 'Sistem Informasi',
  year: '2024',
  semester: 'Semester Genap 2025/2026',
  institution: 'Universitas Prima Indonesia',
  quote:
    'Konsistensi dalam berlatih adalah jalan terpendek menuju kesempurnaan.',
  photoUrl:
    'https://image2url.com/r2/default/images/1773478135570-97c93293-c9c8-4504-8f47-64329097b37a.jpeg',
};

export default function IndexScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <StatusBar barStyle="light-content" backgroundColor="#0a2463" />

      {/* Page Title */}
      <View style={styles.pageHeader}>
        <Text style={styles.pageEyebrow}>IDENTITAS MAHASISWA</Text>
        <Text style={styles.pageTitle}>Digital ID Card</Text>
      </View>

      {/* ─── CARD ─────────────────────────────── */}
      <View style={styles.card}>

        {/* Card Header — navy gradient */}
        <View style={styles.cardHeader}>
          <View style={styles.badgeRow}>
            <View style={styles.badgeIcon}>
              <Text style={styles.badgeIconText}>🎓</Text>
            </View>
            <Text style={styles.badgeLabel}>KARTU IDENTITAS MAHASISWA</Text>
          </View>

          {/* Foto Profil */}
          <View style={styles.photoWrapper}>
            <Image
              source={{ uri: STUDENT.photoUrl }}
              style={styles.photo}
            />
          </View>
        </View>

        {/* Card Body */}
        <View style={styles.cardBody}>

          {/* Nama */}
          <Text style={styles.studentName}>{STUDENT.name}</Text>

          {/* NIM Chip */}
          <View style={styles.nimChip}>
            <Text style={styles.nimChipText}>NIM · {STUDENT.nim}</Text>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Info Grid */}
          <View style={styles.infoGrid}>
            <View style={[styles.infoBox, { flex: 1 }]}>
              <Text style={styles.infoBoxLabel}>JURUSAN</Text>
              <Text style={styles.infoBoxVal}>{STUDENT.major}</Text>
            </View>
            <View style={[styles.infoBox, { flex: 1 }]}>
              <Text style={styles.infoBoxLabel}>ANGKATAN</Text>
              <Text style={styles.infoBoxVal}>{STUDENT.year}</Text>
            </View>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoBoxLabel}>INSTITUSI</Text>
            <Text style={styles.infoBoxVal}>{STUDENT.institution}</Text>
          </View>

          {/* Quote */}
          <View style={styles.quoteBox}>
            <Text style={styles.quoteIcon}>"</Text>
            <Text style={styles.quoteText}>{STUDENT.quote}</Text>
          </View>
        </View>

        {/* Card Footer */}
        <View style={styles.cardFooter}>
          <Text style={styles.footerLabel}>{STUDENT.semester}</Text>
          <View style={styles.activePill}>
            <Text style={styles.activePillText}>AKTIF</Text>
          </View>
        </View>
      </View>

      <Text style={styles.copyright}>© 2025 Digital ID System</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // ─── Layout ──────────────────────────────────
  container: {
    flex: 1,
    backgroundColor: '#f0f4ff',
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 48,
    paddingHorizontal: 24,
  },

  // ─── Page Header ─────────────────────────────
  pageHeader: {
    alignItems: 'center',
    marginBottom: 28,
  },
  pageEyebrow: {
    fontSize: 11,
    letterSpacing: 3,
    color: '#1b4fa8',
    fontWeight: '600',
  },
  pageTitle: {
    fontSize: 26,
    color: '#0a2463',
    fontWeight: '700',
    marginTop: 4,
  },

  // ─── Card ────────────────────────────────────
  card: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#ffffff',   // hex backgroundColor ✅
    borderRadius: 20,              // borderRadius ✅
    overflow: 'hidden',
    shadowColor: '#0a2463',        // shadowColor ✅
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },

  // ─── Card Header ─────────────────────────────
  cardHeader: {
    backgroundColor: '#0a2463',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  badgeIcon: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeIconText: {
    fontSize: 14,
  },
  badgeLabel: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.85)',
    letterSpacing: 1.2,
    fontWeight: '600',
  },
  photoWrapper: {
    alignItems: 'center',
    marginBottom: -48,
    zIndex: 10,
  },
  photo: {
    width: 96,
    height: 96,
    borderRadius: 48,              // borderRadius ✅
    borderWidth: 4,
    borderColor: '#ffffff',
    backgroundColor: '#1b4fa8',
  },

  // ─── Card Body ───────────────────────────────
  cardBody: {
    paddingHorizontal: 24,
    paddingTop: 62,
    paddingBottom: 20,
    alignItems: 'center',
  },
  studentName: {
    fontSize: 21,
    fontWeight: '700',
    color: '#0a2463',
    letterSpacing: -0.2,
    textAlign: 'center',
    marginBottom: 8,
  },
  nimChip: {
    backgroundColor: '#eef2ff',
    borderWidth: 1,
    borderColor: '#c7d2fe',
    borderRadius: 20,              // borderRadius ✅
    paddingHorizontal: 14,
    paddingVertical: 4,
    marginBottom: 18,
  },
  nimChipText: {
    fontSize: 12,
    color: '#1b4fa8',
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#e0e7ff',
    marginBottom: 16,
  },
  infoGrid: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    marginBottom: 10,
  },
  infoBox: {
    backgroundColor: '#f8faff',
    borderWidth: 1,
    borderColor: '#e0e7ff',
    borderRadius: 10,              // borderRadius ✅
    padding: 10,
    width: '100%',
    marginBottom: 10,
  },
  infoBoxLabel: {
    fontSize: 10,
    color: '#6b7280',
    letterSpacing: 0.8,
    fontWeight: '600',
    marginBottom: 3,
  },
  infoBoxVal: {
    fontSize: 13,
    color: '#0a2463',
    fontWeight: '600',
    lineHeight: 18,
  },
  quoteBox: {
    backgroundColor: '#f0f4ff',
    borderLeftWidth: 3,
    borderLeftColor: '#1b4fa8',
    borderRadius: 10,              // borderRadius ✅
    paddingHorizontal: 14,
    paddingVertical: 10,
    width: '100%',
    marginTop: 4,
  },
  quoteIcon: {
    fontSize: 20,
    color: '#1b4fa8',
    lineHeight: 22,
    fontWeight: '700',
  },
  quoteText: {
    fontSize: 12,
    color: '#374151',
    lineHeight: 20,
    fontStyle: 'italic',
  },

  // ─── Card Footer ─────────────────────────────
  cardFooter: {
    backgroundColor: '#0a2463',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  footerLabel: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.5)',
    letterSpacing: 0.5,
  },
  activePill: {
    backgroundColor: 'rgba(52,211,153,0.2)',
    borderWidth: 1,
    borderColor: 'rgba(52,211,153,0.4)',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  activePillText: {
    fontSize: 10,
    color: '#34d399',
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  // ─── Misc ─────────────────────────────────────
  copyright: {
    marginTop: 24,
    fontSize: 11,
    color: '#9ca3af',
  },
});